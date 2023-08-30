import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import { tmdbPosterSource } from "../tmdb/imageUtils";

import { MdImage } from "react-icons/md";
import FlexCol from "./common/FlexCol";
import Loading from "./Loading";

const Placeholder = styled(FlexCol)`
    width: 256px;
    height: 384px;

    justify-content: center;
    align-items: center;

    background-color: var(--background-dark);
    border-radius: 8px;
`;

const Image = styled.img`
    width: 256px;
    height: 384px;
    border-radius: 8px;
    object-fit: cover;
`;

interface Props {
    path?: string;
}

export default function MoviePoster({ path }: Props) {
    const { t } = useTranslation();

    const [src, setSrc] = useState<string>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        tmdbPosterSource(path ?? "", 256).then(setSrc);
    }, [path]);

    if (!path || path === "") {
        return (
            <Placeholder>
                <MdImage size="80px" />
                <span>{t("no_poster")}</span>
            </Placeholder>
        );
    }

    return (
        <>
            <div style={{ display: loading ? "block" : "none" }}>
                <Placeholder>
                    <Loading />
                </Placeholder>
            </div>

            <div style={{ display: loading ? "none" : "block" }}>
                <Image src={src} onLoad={() => setLoading(false)} />
            </div>
        </>
    );
}
