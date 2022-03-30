module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    variants: {
        extend: {},
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["forest"],
    },
};
