import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import { TMDBMovieGenre } from "../tmdb/movieDetails";
import { tmdbGenreMovieList } from "../tmdb/genreMovieList";

import SectionHeader from "./common/SectionHeader";
import Label from "./common/Label";
import CheckBox from "./common/CheckBox";
import FlexRow from "./common/FlexRow";
import GenreButton from "./GenreButton";

const List = styled(FlexRow)`
    flex-wrap: wrap;
    gap: 4px;
`;

interface Props {
    onChange?: (value: string) => void;
}

export default function GenreConfig({ onChange }: Props) {
    const { t, i18n } = useTranslation();

    const [genres, setGenres] = useState<TMDBMovieGenre[]>();
    const [selected, setSelected] = useState<number[]>([]);
    const [allAtOnce, setAllAtOnce] = useState(true);

    useEffect(() => {
        tmdbGenreMovieList({ language: i18n.language }).then((v) => setGenres(v.genres));
    }, [i18n.language]);

    if (!genres) {
        return <></>;
    }

    const onButtonChange = (id: number, value: boolean) => {
        let newValue;

        if (value) {
            newValue = [...selected, id];
        } else {
            newValue = selected.filter((v) => v !== id);
        }

        const sep = allAtOnce ? "," : "|";
        if (onChange) onChange(newValue.join(sep));

        setSelected(newValue);
    };

    const onCheckBoxChange = (value: boolean) => {
        const sep = value ? "," : "|";
        if (onChange) onChange(selected.join(sep));
        setAllAtOnce(value);
    };

    return (
        <div>
            <SectionHeader>{t("genres")}</SectionHeader>

            <List>
                {genres.map((v) => (
                    <GenreButton key={v.id} genre={v} onChange={onButtonChange} />
                ))}
            </List>

            <Label>
                <CheckBox checked onChange={onCheckBoxChange} />
                <span>{t("all_at_once")}</span>
            </Label>
        </div>
    );
}
