import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [pic, setPic] = useState();
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);

	const handleClick1 = () => setShow1(!show1);

	const handleClick2 = () => setShow2(!show2);

	const postDetails = (pics) => {};

	const submitHandler = () => {};

	return (
		<VStack spacing="4px">
			<FormControl id="name" isRequired>
				<FormLabel>Name</FormLabel>
				<Input
					placeholder="Enter your Name"
					onChange={(e) => setName(e.target.value)}
				/>
			</FormControl>
			<FormControl id="email" isRequired>
				<FormLabel>Email</FormLabel>
				<Input
					placeholder="Enter your Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>
			<FormControl id="password" isRequired>
				<FormLabel>Password</FormLabel>
				<InputGroup>
					<Input
						type={show1 ? "text" : "password"}
						placeholder="Enter your Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick1}>
							{show1 ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
			<FormControl id="confirmPassword" isRequired>
				<FormLabel>Confirm Password</FormLabel>
				<InputGroup>
					<Input
						type={show2 ? "text" : "password"}
						placeholder="Confirm Password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick2}>
							{show2 ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
			<FormControl id="pic" isRequired>
				<FormLabel>Upload your Picture</FormLabel>
				<Input
					type="file"
					p={1.5}
					accept="image/*"
					onChange={(e) => postDetails(e.target.files[0])}
				/>
			</FormControl>

			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: 15 }}
				onClick={submitHandler}
			>
				Sign Up
			</Button>
		</VStack>
	);
};

export default SignUp;
