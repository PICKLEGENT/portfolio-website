import { SmallInfoProps } from "../types"
// import { useEffect, useState } from "react";

const SmallInfo = ({ title, text }: SmallInfoProps) => {
    // const [decodeString, setDecodeString] = useState('')

    // const lettersENG = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // const tipToDecode = text

    // const decode = () => {
    //     let iteration = 0;

    //     const interval = setInterval(() => {
    //         text = text.split('').map((_letter, index) => {
    //             if (index < iteration) {
    //                 return tipToDecode[index];
    //             }

    //             return lettersENG[Math.floor(Math.random() * 26)]
    //         })
    //             .join('');

    //         if (iteration >= text.length) {
    //             clearInterval(interval);
    //         }

    //         iteration += 1 / 3;
    //         setDecodeString(text)
    //     }, 30);
    // }

    // useEffect(() => {
    //     decode()
    // }, [])

    return (
        <div>
            <h2 className="font-bold text-4xl lg:text-7xl text-purple-800 dark:text-yellow-400">
                {title}
            </h2>
            <p className="small-info__text mt-4 text-2xl lg:text-4xl text-zinc-900 dark:text-neutral-100">
                {text}
            </p>
        </div>
    )
}

export default SmallInfo