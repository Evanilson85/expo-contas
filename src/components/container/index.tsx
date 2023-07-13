import { Container } from './style'

interface ChildrenProps {
    children: JSX.Element;
}

export const ContainerCardMain = ({ children } : ChildrenProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}