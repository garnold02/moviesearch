import React, { useEffect, useRef, useState } from "react";
import { css, styled } from "styled-components";
import { MdSearch } from "react-icons/md";

const Grid = styled.form`
    width: 288px;
    height: 48px;

    display: grid;
    grid-template-columns: 240px 48px;

    border-radius: 8px;
`;

const Input = styled.input`
    padding: 0 0 0 16px;

    border: none;
    border-radius: 8px 0 0 8px;

    font-size: 16px;
    color: var(--text-light);
    background-color: var(--input-idle);

    &:focus {
        outline: none;
    }
`;

const Button = styled.button<{ $active: boolean }>`
    display: grid;
    place-items: center;

    border: none;
    border-radius: 0 8px 8px 0;

    background-color: var(--input-idle);
    color: var(--text-light);

    ${(props) => {
        if (props.$active) {
            return css`
                background-color: var(--accent-idle);

                &:hover {
                    background-color: var(--accent-hover);
                    cursor: pointer;
                }

                &:active {
                    background-color: var(--accent-active);
                }
            `;
        } else {
            return "";
        }
    }}
`;

interface Props {
    defaultValue?: string;
    onSearch?: (query: string) => void;
}

export default function SearchBar({ defaultValue, onSearch }: Props) {
    const input = useRef<HTMLInputElement>(null);
    const [buttonActive, setButtonActive] = useState(false);

    const onChange = () => {
        if (input.current) {
            setButtonActive(input.current.value ? true : false);
        }
    };

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (input.current && input.current.value) {
            if (onSearch) onSearch(input.current.value);
            input.current.blur();
        }
    };

    useEffect(() => {
        onChange();
    }, [defaultValue]);

    return (
        <Grid>
            <Input
                ref={input}
                type="text"
                maxLength={64}
                defaultValue={defaultValue}
                onChange={onChange}
            />
            <Button onClick={onClick} $active={buttonActive}>
                <MdSearch size="32px" />
            </Button>
        </Grid>
    );
}
