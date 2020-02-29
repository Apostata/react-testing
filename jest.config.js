module.exports = {
    // seta os mocks para imagens e fontes e proxy para css
    setupFilesAfterEnv: ['<rootDir>/src/specs/setupTests.js'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/specs/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "identity-obj-proxy"
    }
}