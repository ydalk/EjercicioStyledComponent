import styles from "styled-components";

// .language {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     padding: 2px 0;
// }
// .language-button {
//     background-color: white;
//     padding: 4px 2px;
//     margin-right: 10px;
// }

// .language-button.active {
//     color: white;
//     background-color: #17589f;
// }

export const ButtonS = styles.button <{isActive : boolean}> `
    background-color: white;
    padding: 4px 2px;
    margin-right: 10px;

    ${({isActive})=> isActive ? (
        `
     color: white;
     background-color: #17589f;
        `

    ) : ""}
`

export const ContainerLanguage = styles.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 2px 0;
`
