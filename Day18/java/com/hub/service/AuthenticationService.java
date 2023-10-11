package com.hub.service;

import javax.management.relation.Role;

import org.springframework.stereotype.Service;

import com.hub.dto.request.AuthenticationRequest;
import com.hub.dto.request.RegisterRequest;
import com.hub.dto.response.AuthenticationResponse;
import com.hub.entity.UserRegister;
import com.hub.repository.UserOneRegisterRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService 
{
	private final UserOneRegisterRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice ;
	 private final AuthenticationManager authenticationManager ;
	 public AuthenticationResponse register(RegisterRequest request) {
			// TODO Auto-generated method stub				
		    var user = UserRegister.builder()
		            .username(request.getUsername())
		            .emailid(request.getEmailid())
		            .mobileno(request.getMobileno())
		            .password(passwordEncoder.encode(request.getPassword()))
		            .role(Role.USER)
		            .build();
		    repository.save(user); 
		    var jwtToken = jwtservice.generateToken(user);
		    
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		}

	 public AuthenticationResponse authenticate(AuthenticationRequest request) {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
					request.getUsername(),
					request.getPassword()
					)
					);
					var user = repository.findByUsername(request.getUsername())
							.orElseThrow();
					 var jwtToken = jwtservice.generateToken(user);
					    
						return AuthenticationResponse.builder()
								.token(jwtToken)
								.build();
		}

}