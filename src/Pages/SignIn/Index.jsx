import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Background } from "./style";

export function SignIn() {
    return (
       <Container>
        <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
        
            <h2>Faça o seu login</h2>

            <Input
                type="text"
                icon={FiMail}
                placeholder="E-mail" 
             />
            <Input 
                type="password"
                icon={FiLock}
                placeholder="Senha" 
            />

            <Button 
                title="Entrar"
            />

            <a href="#">Criar conta</a>
        </Form>

        <Background />
       </Container>
    );
}