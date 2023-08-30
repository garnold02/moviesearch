import { useTranslation } from "react-i18next";

import { TMDBMovieCrewMember } from "../tmdb/movieCredits";

import SectionHeader from "./common/SectionHeader";

interface Props {
    crew?: TMDBMovieCrewMember[];
}

export default function MovieDirector({ crew }: Props) {
    const { t } = useTranslation();

    if (!crew || crew.length === 0) {
        return <></>;
    }

    const director = crew.find((v) => v.job === "Director");

    if (!director) {
        return <></>;
    }

    return (
        <div>
            <SectionHeader>{t("director")}</SectionHeader>
            <span>{director.name}</span>
        </div>
    );
}
