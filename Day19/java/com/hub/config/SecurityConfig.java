package com.hub.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	
	private final   JwtAuthenticationFilter jwtAuthFilter ;
	private final AuthenticationProvider authenticationProvider ;

	@Bean
	 public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http .csrf().disable()
		.authorizeRequests()
		.requestMatchers("/auth/**")
		.permitAll()
		.anyRequest().authenticated().and().sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().authenticationProvider(authenticationProvider)
		.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
			
		   
	}
}