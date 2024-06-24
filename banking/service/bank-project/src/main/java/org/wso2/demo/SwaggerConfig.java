package org.wso2.demo;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import java.util.Collections;

@Configuration
public class SwaggerConfig {
    @Bean
    public GroupedOpenApi api() {
        return GroupedOpenApi.builder()
                .group("payments-public")
                .pathsToMatch("/payment/**")
                .build();
    }

    @Bean
    public OpenAPI apiInfo() {
        return new OpenAPI()
                .info(new Info().title("Payments API")
                        .description("Process Payments & Maintain History")
                        .version("v0.0.1")
                        .license(new License().name("Apache 2.0").url("http://payments.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("Payments Wiki Documentation")
                        .url("https://payments.wiki.github.org/docs"));
    }
}
