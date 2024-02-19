import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";

import { Background, Container, Form } from "./style";


export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    type="text"
                    icon={FiUser}
                    placeholder="Nome"
                />
                <Input 
                    type="email"
                    icon={FiMail}
                    placeholder="E-mail"
                />
                <Input 
                    type="password"
                    icon={FiLock}
                    placeholder="Senha"
                />

                <Button title="Cadastrar"/>
                    
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>   

            </Form>

            <Background />
        </Container>
    );
}