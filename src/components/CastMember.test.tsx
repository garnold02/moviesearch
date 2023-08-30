import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import CastMember from "./CastMember";
import { TMDBMovieCastMember } from "../tmdb/movieCredits";

afterEach(cleanup);

describe("Cast member", () => {
    it("Should display the real name of the cast member", () => {
        const data = {
            name: "Real Name",
            character: "Character Name",
        } as TMDBMovieCastMember;

        render(<CastMember data={data} />);

        expect(screen.getByText("Real Name")).toBeTruthy();
    });

    it("Should display the character name of the cast member", () => {
        const data = {
            name: "Real Name",
            character: "Character Name",
        } as TMDBMovieCastMember;

        render(<CastMember data={data} />);

        expect(screen.getByText("Character Name")).toBeTruthy();
    });
});
