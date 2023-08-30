import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

import { TMDBMovieCastMember } from "../tmdb/movieCredits";

import SectionHeader from "./common/SectionHeader";
import FlexRow from "./common/FlexRow";
import CastMember from "./CastMember";

const List = styled(FlexRow)`
    gap: 16px;
    overflow-x: scroll;
    padding-bottom: 16px;
`;

interface Props {
    cast?: TMDBMovieCastMember[];
}

export default function MovieCast({ cast }: Props) {
    const { t } = useTranslation();

    if (!cast || cast.length === 0) {
        return <></>;
    }

    return (
        <div>
            <SectionHeader>{t("cast")}</SectionHeader>
            <List>
                {cast.map((v) => (
                    <CastMember key={v.id} data={v} />
                ))}
            </List>
        </div>
    );
}
