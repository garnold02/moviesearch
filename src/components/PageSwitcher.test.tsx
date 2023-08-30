import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";

import PageSwitcher from "./PageSwitcher";

afterEach(cleanup);

describe("Page switcher", () => {
    it("should show all neccessary buttons", async () => {
        const last = Math.round(Math.random() * 500);
        const current = Math.round(Math.random() * last);

        const min = Math.max(1, current - 2);
        const max = Math.min(current + 2, last);

        render(<PageSwitcher current={current} last={last} />);

        expect(screen.getByText("1")).toBeTruthy();
        expect(screen.getByText(`${last}`)).toBeTruthy();

        for (let i = min; i <= max; i++) {
            expect(screen.getByText(`${i}`)).toBeTruthy();
        }

        if (current !== 1) {
            expect(screen.getByText("<")).toBeTruthy();
        }

        if (current !== last) {
            expect(screen.getByText(">")).toBeTruthy();
        }
    });

    it("should switch to previous page when clicked", async () => {
        const user = userEvent.setup();

        let current = 2;

        render(<PageSwitcher current={current} last={2} onSwitch={(v) => (current = v)} />);

        await user.click(screen.getByText("<"));
        expect(current).toBe(1);
    });

    it("should switch to next page when clicked", async () => {
        const user = userEvent.setup();

        let current = 1;

        render(<PageSwitcher current={current} last={2} onSwitch={(v) => (current = v)} />);

        await user.click(screen.getByText(">"));
        expect(current).toBe(2);
    });

    it("should switch to arbitrary page when clicked", async () => {
        const user = userEvent.setup();

        const last = Math.round(Math.random() * 500);
        let current = Math.round(Math.random() * last);

        const min = Math.max(1, current - 2);
        const max = Math.min(current + 2, last);
        const next = Math.round(min + Math.random() * (max - min));

        render(<PageSwitcher current={current} last={last} onSwitch={(v) => (current = v)} />);

        await user.click(screen.getByText(`${next}`));
        expect(current).toBe(next);
    });
});
