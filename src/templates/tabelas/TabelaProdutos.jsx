import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaProduto.map(() => {
                            return (<tr key={produto.nome}>
                                <td>{produto.nome}</td>
                                <td>{produto.quantidade}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}