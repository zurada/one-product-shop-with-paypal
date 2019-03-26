import LocalizedStrings from 'react-localization';

const config =
    {
        translation:
            new LocalizedStrings({
                en: {
                    how: "How do you want your egg today?",
                    boiledEgg: "Boiled egg",
                    softBoiledEgg: "Soft-boiled egg",
                    choice: "How to choose the egg"
                },
                it: {
                    how: "Come vuoi il tuo uovo oggi?",
                    boiledEgg: "Uovo sodo",
                    softBoiledEgg: "Uovo alla coque",
                    choice: "Come scegliere l'uovo"
                },
                de: {
                    how: "Come vuoi il tuo uovo oggi?",
                    boiledEgg: "Uovo sodo",
                    softBoiledEgg: "Uovo alla coque",
                    choice: "Come scegliere l'uovo"
                }
            })
    };
export default config;