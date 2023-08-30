import { useEffect, useState } from "react";
import { styled } from "styled-components";

import { tmdbProfileSource } from "../tmdb/imageUtils";

import { MdPerson } from "react-icons/md";
import Centered from "./common/Centered";
import Loading from "./Loading";

const Image = styled.img`
    width: 185px;
    height: 200px;

    object-fit: cover;
    border-radius: 8px 8px 0 0;
`;

const LoadFrame = styled.div`
    width: 185px;
    height: 200px;

    background-color: var(--background-dark);
    border-radius: 8px 8px 0 0;
`;

const IconFrame = styled(Centered)`
    width: 185px;
    height: 200px;

    background-color: var(--border);
    border-radius: 8px 8px 0 0;
`;

interface Props {
    path: string;
}

export default function ProfilePicture({ path }: Props) {
    if (!path) {
        return (
            <IconFrame>
                <MdPerson size="128px" />
            </IconFrame>
        );
    }

    const [src, setSrc] = useState<string>();

    useEffect(() => {
        tmdbProfileSource(path, 185).then(setSrc);
    }, [path]);

    const [loading, setLoading] = useState(true);

    return (
        <>
            <div style={{ display: loading ? "block" : "none" }}>
                <LoadFrame>
                    <Loading />
                </LoadFrame>
            </div>

            <div style={{ display: loading ? "none" : "block" }}>
                <Image src={src} onLoad={() => setLoading(false)} />
            </div>
        </>
    );
}
