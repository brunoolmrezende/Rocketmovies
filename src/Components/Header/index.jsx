import { Link } from "react-router-dom";
import { Input } from "../Input";

import { Container, Form, Profile } from "./style";

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Form>
                <Input placeholder="Pesquisar pelo título"/>
            </Form>
            
            <Profile to={"/register"}>
                <div>
                    <strong>Bruno Rezende</strong>
                    <Link to="">sair</Link>
                </div>

                <img 
                    src="https://github.com/diego3g.png"
                    alt="Foto do usuário"
                    />
            </Profile>
        </Container>
    );
}