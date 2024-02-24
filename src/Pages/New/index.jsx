import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";
import { Markup } from "../../Components/Markup";
import { Button } from "../../Components/Button";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form } from "./style";

export function NewMovie() {
    return (
        <Container>
            <Header />

            <Link to={"/"}> 
                <FiArrowLeft />
                Voltar
            </Link>
                
            <main>
                <Form>
                    <h1>Novo filme</h1>
                    <div>
                        <Input 
                            type="text"
                            placeholder="Título"
                        />
                        <Input 
                            type="number"
                            placeholder="Sua nota (de 0 a 5)"
                        />
                        
                    </div>

                    <Textarea placeholder="Observações" />
                    
                    <div className="markup">
                        <h2>Marcadores</h2>

                        <div className="tags">
                            <Markup value="React"/>
                            <Markup 
                                isNew 
                                placeholder="Novo marcador" 
                            />            
                        </div>

                    </div>   

                    <div className="buttons">
                        <Button title="Excluir filme" />
                        <Button title="Salvar alteraçõs" />
                    </div>    
                    
                </Form>
            </main>   
           
        </Container>
    );
}