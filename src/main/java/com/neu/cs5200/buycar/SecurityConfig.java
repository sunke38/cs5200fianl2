package com.neu.cs5200.buycar;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMethod;


@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	 @Autowired
	    private DataSource dataSource;
	    
	    protected void configure(HttpSecurity http) throws Exception {
	        http
	            .csrf().disable()
	            //.httpBasic()
	            .formLogin()
	                //.loginPage("/login")
	            .and()
	            .authorizeRequests()
	            .antMatchers(HttpMethod.GET,"/hello/**").hasAuthority("Customer")
	            .antMatchers(HttpMethod.GET,"/api/user/profile").authenticated()
	            .antMatchers("/saler/**").hasAuthority("Salesman")
	            .antMatchers("/customer/**").hasAuthority("Customer")
	            .antMatchers("/admin/**").hasAuthority("Admin")
	            .antMatchers(HttpMethod.POST,"/hello/**").hasAuthority("Customer")
	            .anyRequest().permitAll()
	            .and()
	            .logout();
	            
	    }
	    
	    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	        auth
	            .inMemoryAuthentication().withUser("888").password("888").authorities("Customer");
	        
	        auth
	            .jdbcAuthentication()
	            .dataSource(dataSource)
	            .usersByUsernameQuery("SELECT username, password,enable FROM user WHERE username=?")
	            .authoritiesByUsernameQuery("SELECT username, role FROM user WHERE username=?");
	        
	    }
	    @Bean
	    public static NoOpPasswordEncoder passwordEncoder() {
	        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
	    }
}
