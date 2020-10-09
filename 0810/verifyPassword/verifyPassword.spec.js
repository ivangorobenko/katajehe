import chai from "chai";
import {isValidPassword} from "./verifyPassword";

chai.should();

describe("Lee mot e passe", function () {
    it("ne doit pas accépter le hashtag ", () => {
        const motDePasseAVerifier = "abcde#";
        isValidPassword(motDePasseAVerifier).should.be.deep.equals( [{"message": "should ont contain #"}, {"message": "should contain numbers"}]);
    });

    it("doit contenir au moins un chiffre", () => {
        const motDePasseAVerifier = "abcde";
        isValidPassword(motDePasseAVerifier).should.be.deep.equals( [ {"message": "should contain numbers"}]);
    });

    it("doit renvoyer OK si toutes les règles sont réspectées", () => {
        const motDePasseAVerifier = "abcde123";
        isValidPassword(motDePasseAVerifier).should.be.empty;
    });
});
