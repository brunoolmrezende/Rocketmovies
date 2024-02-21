import { Link } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { Container, Header, Form, Avatar } from "./style";

export function Profile() {
    return (
        <Container>
            <Header>
                <div>
                    <FiArrowLeft />
                    <Link to={"/"}>Voltar</Link>
                </div>  
            </Header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/diego3g.png"
                        alt="Imagem do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            type="file"
                            id="avatar" 
                        />
                    </label>
                </Avatar>
                
                <Input 
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                />
                <Input 
                    type="email"
                    placeholder="E-mail"
                    icon={FiMail}
                />
                <Input 
                    type="password"
                    placeholder="Senha atual"
                    icon={FiLock}
                />
                 <Input 
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
            
        </Container>
    );
}