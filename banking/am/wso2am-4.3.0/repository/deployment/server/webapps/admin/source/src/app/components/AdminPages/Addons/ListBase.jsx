/* eslint-disable react/jsx-props-no-spreading */
/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MUIDataTable from 'mui-datatables';
import ContentBase from 'AppComponents/AdminPages/Addons/ContentBase';
import InlineProgress from 'AppComponents/AdminPages/Addons/InlineProgress';
import { Link as RouterLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';

/**
 * Render a list
 * @param {JSON} props props passed from parent
 * @returns {JSX} Header AppBar components.
 */
function ListBase(props) {
    const {
        EditComponent, editComponentProps, DeleteComponent, showActionColumn,
        columProps, pageProps, addButtonProps, addButtonOverride,
        searchProps: { active: searchActive, searchPlaceholder }, apiCall, emptyBoxProps: {
            title: emptyBoxTitle,
            content: emptyBoxContent,
        },
        noDataMessage,
        addedActions,
    } = props;

    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const intl = useIntl();

    const filterData = (event) => {
        setSearchText(event.target.value);
    };

    const sortBy = (field, reverse, primer) => {
        const key = primer
            ? (x) => {
                return primer(x[field]);
            }
            : (x) => {
                return x[field];
            };

        // eslint-disable-next-line no-param-reassign
        reverse = !reverse ? 1 : -1;

        return (a, b) => {
            const aValue = key(a);
            const bValue = key(b);
            return reverse * ((aValue > bValue) - (bValue > aValue));
        };
    };
    const onColumnSortChange = (changedColumn, direction) => {
        const sorted = [...data].sort(sortBy(changedColumn, direction === 'descending'));
        setData(sorted);
    };

    const fetchData = () => {
        // Fetch data from backend when an apiCall is provided
        setData(null);
        if (apiCall) {
            const promiseAPICall = apiCall();
            promiseAPICall.then((LocalData) => {
                if (LocalData) {
                    setData(LocalData);
                    setError(null);
                } else {
                    setError(intl.formatMessage({
                        id: 'AdminPages.Addons.ListBase.noDataError',
                        defaultMessage: 'Error while retrieving data.',
                    }));
                }
            })
                .catch((e) => {
                    setError(e.message);
                });
        }
        setSearchText('');
    };

    useEffect(() => {
        fetchData();
    }, []);

    useLayoutEffect(() => {
        let i;
        const sortButtonList = document.getElementsByClassName('MuiTableSortLabel-root');
        const footerList = document.getElementsByClassName('MuiTable-root');

        for (i = 0; i < sortButtonList.length; i++) {
            sortButtonList[i].setAttribute('aria-label', `sort-icon-button-${i}`);
        }

        if (footerList.length > 1) footerList[1].setAttribute('role', 'presentation');
    });

    let columns = [];
    if (columProps) {
        columns = [
            ...columProps,
        ];
    }
    if (showActionColumn) {
        columns.push(
            {
                name: '',
                label: 'Actions',
                options: {
                    filter: false,
                    sort: false,
                    customBodyRender: (value, tableMeta) => {
                        const dataRow = data[tableMeta.rowIndex];
                        const itemName = (typeof tableMeta.rowData === 'object') ? tableMeta.rowData[0] : '';
                        if (editComponentProps && editComponentProps.routeTo) {
                            if (typeof tableMeta.rowData === 'object') {
                                const artifactId = tableMeta.rowData[tableMeta.rowData.length - 2];
                                return (
                                    <div data-testid={`${itemName}-actions`}>
                                        <RouterLink to={editComponentProps.routeTo + artifactId}>
                                            <IconButton color='primary' component='span' size='large'>
                                                <EditIcon aria-label={`edit-policies+${artifactId}`} />
                                            </IconButton>
                                        </RouterLink>
                                        {DeleteComponent && (
                                            <DeleteComponent
                                                dataRow={dataRow}
                                                updateList={fetchData}
                                            />
                                        )}
                                        {addedActions && addedActions.map((action) => {
                                            const AddedComponent = action;
                                            return (
                                                <AddedComponent rowData={tableMeta.rowData} updateList={fetchData} />
                                            );
                                        })}
                                    </div>
                                );
                            } else {
                                return (<div />);
                            }
                        }
                        return (
                            <div data-testid={`${itemName}-actions`}>
                                {EditComponent && (
                                    <EditComponent
                                        dataRow={dataRow}
                                        updateList={fetchData}
                                        {...editComponentProps}
                                    />
                                )}
                                {DeleteComponent && (<DeleteComponent dataRow={dataRow} updateList={fetchData} />)}
                                {addedActions && addedActions.map((action) => {
                                    const AddedComponent = action;
                                    return (
                                        <AddedComponent rowData={tableMeta.rowData} updateList={fetchData} />
                                    );
                                })}
                            </div>

                        );
                    },
                    setCellProps: () => {
                        return {
                            style: { width: 200 },
                        };
                    },
                },
            },
        );
    }
    const options = {
        filterType: 'checkbox',
        selectableRows: 'none',
        filter: false,
        search: false,
        print: false,
        download: false,
        viewColumns: false,
        customToolbar: null,
        responsive: 'vertical',
        searchText,
        onColumnSortChange,
    };

    // If no apiCall is provided OR,
    // retrieved data is empty, display an information card.
    if (!apiCall || (data && data.length === 0)) {
        return (
            <ContentBase
                {...pageProps}
                pageStyle='small'
            >
                <Card>
                    <CardContent>
                        {emptyBoxTitle}
                        {emptyBoxContent}
                    </CardContent>
                    <CardActions>
                        {addButtonOverride || (
                            EditComponent && (<EditComponent updateList={fetchData} {...addButtonProps} />)
                        )}
                    </CardActions>
                </Card>
            </ContentBase>
        );
    }

    // If apiCall is provided and data is not retrieved yet, display progress component
    if (!error && apiCall && !data) {
        return (
            <ContentBase pageStyle='paperLess'>
                <InlineProgress />
            </ContentBase>

        );
    }
    if (error) {
        return (
            <ContentBase {...pageProps}>
                <Alert severity='error'>{error}</Alert>
            </ContentBase>

        );
    }
    return (
        <>
            <ContentBase {...pageProps}>
                {(searchActive || addButtonProps) && (
                    <AppBar
                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                        position='static'
                        color='default'
                        elevation={0}
                    >
                        <Toolbar>
                            <Grid container spacing={2} alignItems='center'>

                                <Grid item>
                                    {searchActive && (<SearchIcon sx={{ display: 'block' }} color='inherit' />)}
                                </Grid>
                                <Grid item xs>
                                    {searchActive && (
                                        <TextField
                                            variant='standard'
                                            fullWidth
                                            placeholder={searchPlaceholder}
                                            sx={(theme) => ({
                                                '& .search-input': {
                                                    fontSize: theme.typography.fontSize,
                                                },
                                            })}
                                            InputProps={{
                                                disableUnderline: true,
                                                className: 'search-input',
                                            }}
                                            // eslint-disable-next-line react/jsx-no-duplicate-props
                                            inputProps={{
                                                'aria-label': 'search-by-policy',
                                            }}
                                            onChange={filterData}
                                            value={searchText}
                                        />
                                    )}
                                </Grid>
                                <Grid item>
                                    {addButtonOverride || (
                                        EditComponent && (
                                            <EditComponent
                                                updateList={fetchData}
                                                {...addButtonProps}
                                            />
                                        )
                                    )}
                                    <Tooltip title={(
                                        <FormattedMessage
                                            id='AdminPages.Addons.ListBase.reload'
                                            defaultMessage='Reload'
                                        />
                                    )}
                                    >
                                        <IconButton onClick={fetchData} size='large'>
                                            <RefreshIcon
                                                aria-label='refresh-advanced-policies'
                                                sx={{ display: 'block' }}
                                                color='inherit'
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                )}
                <div>
                    {data && data.length > 0 && (
                        <MUIDataTable
                            title={null}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    )}
                </div>
                {data && data.length === 0 && (
                    <div>
                        <Typography color='textSecondary' align='center'>
                            {noDataMessage}
                        </Typography>
                    </div>
                )}
            </ContentBase>
        </>
    );
}

ListBase.defaultProps = {
    addButtonProps: {},
    addButtonOverride: null,
    searchProps: {
        searchPlaceholder: '',
        active: true,
    },
    actionColumnProps: {
        editIconShow: true,
        editIconOverride: null,
        deleteIconShow: true,
    },
    addedActions: null,
    noDataMessage: (
        <FormattedMessage
            id='AdminPages.Addons.ListBase.nodata.message'
            defaultMessage='No items yet'
        />
    ),
    showActionColumn: true,
    apiCall: null,
    EditComponent: null,
    DeleteComponent: null,
    editComponentProps: {},
    columProps: null,
};
ListBase.propTypes = {
    EditComponent: PropTypes.element,
    editComponentProps: PropTypes.shape({}),
    DeleteComponent: PropTypes.element,
    showActionColumn: PropTypes.bool,
    columProps: PropTypes.element,
    pageProps: PropTypes.shape({}).isRequired,
    addButtonProps: PropTypes.shape({}),
    searchProps: PropTypes.shape({
        searchPlaceholder: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
    }),
    apiCall: PropTypes.func,
    emptyBoxProps: PropTypes.shape({
        title: PropTypes.element.isRequired,
        content: PropTypes.element.isRequired,
    }).isRequired,
    actionColumnProps: PropTypes.shape({
        editIconShow: PropTypes.bool,
        editIconOverride: PropTypes.element,
        deleteIconShow: PropTypes.bool,
    }),
    noDataMessage: PropTypes.element,
    addButtonOverride: PropTypes.element,
    addedActions: PropTypes.shape([]),
};
export default ListBase;
