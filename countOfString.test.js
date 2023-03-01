import { countOfStringWrong, countOfStringCorrect } from "./countOfStringWrong.js";
describe('test', function () {
    it("countOfStringWrong('a') is 1", () => {
        expect(countOfStringWrong("a")).toBe(1);
    });

    it("countOfStringWrong('😥') is 2", () => {
        expect(countOfStringWrong("😥")).toBe(2);
    });

    it("countOfStringWrong('𠮷野屋で𩸽頼んで𠮟られる😭') is 17", () => {
       expect(countOfStringWrong("𠮷野屋で𩸽頼んで𠮟られる😭")).toBe(17);
    });

    it("countOfStringCorrect('a') is 1", () => {
        expect(countOfStringCorrect("a")).toBe(1);
    });

    it("countOfStringCorrect('😥') is 1", () => {
        expect(countOfStringCorrect("😥")).toBe(1);
    });

    it("countOfStringCorrect('𠮷野屋で𩸽頼んで𠮟られる😭') is 13", () => {
        expect(countOfStringCorrect(`𠮷野屋で𩸽頼んで𠮟られる😭`)).toBe(13);
    });
});