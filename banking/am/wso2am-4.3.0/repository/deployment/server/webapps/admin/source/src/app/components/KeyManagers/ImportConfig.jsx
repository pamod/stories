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

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useIntl, FormattedMessage } from 'react-intl';
import FormDialogBase from 'AppComponents/AdminPages/Addons/FormDialogBase';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { useAppContext } from 'AppComponents/Shared/AppContext';

const StyledSpan = styled('span')(({ theme }) => ({ color: theme.palette.error.dark }));

/**
 * Render delete dialog box.
 * @param {JSON} props component props.
 * @returns {JSX} Loading animation.
 */
function ImportConfig(props) {
    const intl = useIntl();


    const { settings } = useAppContext();

    const defaultKMType = (settings.keyManagerConfiguration
        && settings.keyManagerConfiguration.length > 0)
        ? settings.keyManagerConfiguration[0].type : '';

    const { callBack } = props;

    const [url, setUrl] = useState('');
    const [type, setType] = useState(defaultKMType);
    const [validating, setValidating] = useState(false);
    const onChange = (e) => {
        const { target: { name: field, value: fieldValue } } = e;
        switch (field) {
            case 'url':
                setUrl(fieldValue);
                break;
            case 'type':
                setType(fieldValue);
                break;
            default:
                break;
        }
    };

    const hasErrors = (fieldName, fieldValue, validatingActive) => {
        let error = false;
        if (!validatingActive) {
            return (false);
        }
        switch (fieldName) {
            case 'url':
                error = fieldValue === '' ? fieldName + ' is Empty' : false;
                break;
            default:
                break;
        }
        return error;
    };
    const formHasErrors = (validatingActive = false) => {
        if (hasErrors('url', url, validatingActive)
        ) {
            return true;
        } else {
            return false;
        }
    };
    const formSaveCallback = () => {
        setValidating(true);
        if (!formHasErrors(true)) {
            return ((setOpen) => {
                callBack({ url, type });
                setOpen(false);
            });
        }
        return false;
    };
    return (
        <FormDialogBase
            title={intl.formatMessage({
                id: 'KeyManagers.ImportConfig.dialog.tilte.add.new',
                defaultMessage: 'Import Key Manager Configuration',
            })}
            saveButtonText={intl.formatMessage({
                id: 'KeyManagers.ImportConfig.dialog.btn.import',
                defaultMessage: 'Import',
            })}
            triggerButtonText={intl.formatMessage({
                id: 'KeyManagers.ImportConfig.dialog.trigger.import',
                defaultMessage: 'Import',
            })}
            icon={null}
            triggerButtonProps={{
                color: 'primary',
                variant: 'contained',
                size: 'small',
            }}
            formSaveCallback={formSaveCallback}
        >
            <FormControl
                variant='outlined'
                className={classes.FormControlRoot}
                error={hasErrors('type', type, validating)}
                margin='dense'
                fullWidth
            >
                <InputLabel classes={{ root: classes.labelRoot }}>
                    <FormattedMessage
                        defaultMessage='Key Manager Type'
                        id='Admin.KeyManager.form.type'
                    />
                    <StyledSpan>*</StyledSpan>
                </InputLabel>
                <Select
                    variant='standard'
                    name='type'
                    value={type}
                    onChange={onChange}
                    classes={{ select: classes.select }}
                >
                    {settings.keyManagerConfiguration.map((keymanager) => (
                        <MenuItem key={keymanager.type} value={keymanager.type}>
                            {keymanager.type}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>
                    {hasErrors('type', type, validating) || (
                        <FormattedMessage
                            defaultMessage='Select Key Manager Type'
                            id='KeyManagers.AddEditKeyManager.form.type.help'
                        />
                    )}
                </FormHelperText>
            </FormControl>
            <TextField
                margin='dense'
                name='url'
                value={url}
                onChange={onChange}
                label={(
                    <span>
                        <FormattedMessage
                            id='KeyManagers.ImportConfig.form.url'
                            defaultMessage='Url'
                        />
                        <StyledSpan>*</StyledSpan>
                    </span>
                )}
                fullWidth
                multiline
                helperText={hasErrors('url', url, validating) || intl.formatMessage({
                    id: 'KeyManagers.ImportConfig.form.url.help',
                    defaultMessage: 'Provide Url',
                })}
                variant='outlined'
                error={hasErrors('url', url, validating)}
            />
        </FormDialogBase>
    );
}
ImportConfig.propTypes = {
    dataRow: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
};
export default ImportConfig;
