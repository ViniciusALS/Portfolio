interface Props {
    color: string
}

export default function BulletPoint(props: Props) {
    return (
        <div className={`w-2 h-2 rounded-full`} style={{backgroundColor: props.color}}/>
    )
}