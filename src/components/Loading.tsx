import { styled } from "styled-components";
import Centered from "./common/Centered";

const Container = styled(Centered)`
    width: 100%;
    height: 100%;
`;

const Spinner = styled.span`
    width: 64px;
    height: 64px;
    border: 8px solid var(--border);
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default function Loading() {
    return (
        <Container>
            <Spinner />
        </Container>
    );
}
