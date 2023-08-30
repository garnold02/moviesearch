import { useState } from "react";
import { useTranslation } from "react-i18next";

import { SortBy } from "../tmdb/discoverMovie";

import SectionHeader from "./common/SectionHeader";
import Label from "./common/Label";
import RadioButton from "./common/RadioButton";

const values = [
    ["most_popular", "popularity.desc"],
    ["least_popular", "popularity.asc"],
    ["latest", "primary_release_date.desc"],
    ["oldest", "primary_release_date.asc"],
    ["highest_rated", "vote_average.desc"],
    ["lowest_rated", "vote_average.asc"],
];

interface Props {
    onChange?: (value: SortBy) => void;
}

export default function SortConfig({ onChange }: Props) {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(values[0][1]);

    const onClick = (id: string) => {
        setCurrent(id);
        if (onChange) onChange(id as SortBy);
    };

    return (
        <div>
            <SectionHeader>{t("sort_by")}</SectionHeader>

            {values.map(([k, v]) => (
                <Label key={`l_${k}`}>
                    <RadioButton key={k} id={v} current={current} onClick={onClick} />
                    {t(k)}
                </Label>
            ))}
        </div>
    );
}
