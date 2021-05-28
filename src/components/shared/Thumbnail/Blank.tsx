import styled from 'styled-components/macro'
import { ThumbnailImage, transparentBase64, H3, Tags } from './Thumbnail'

interface IBlankCardsProps {
	projectLength: number
	rowLength: number
}

export const Blank = (props: IBlankCardsProps): JSX.Element => {
	const missingAmount = props.rowLength - (props.projectLength % props.rowLength)
	const newArray = missingAmount > 0 ? Array.from(Array(missingAmount).keys()) : []
	return (
		<>
			{(newArray || []).map((x: number, index: number) => {
				const isRowEven = Math.floor((index + props.projectLength) / props.rowLength) % 2 === 0
				const tagLength = Array.from(Array(Math.floor(Math.random() * 3) + 1).keys())
				return (
					<BlankCard
						key={x + index}
						style={{
							opacity: 0.4,
							transform: `translate3d(${props.rowLength <= 2 ? '0' : isRowEven ? '-30px' : '30px'}, 0,0)`,
						}}
					>
						<ThumbnailImage
							style={{
								backgroundImage: `url('data:image/png;base64,${transparentBase64}')`,
							}}
						/>
						<H3>{RandomStr()}</H3>
						<Tags>
							[
							{tagLength.map((x: number, index) => {
								return <Tag key={x + index}>{tagLength.length !== index + 1 ? RandomStr() + ', ' : RandomStr()}</Tag>
							})}
							]
						</Tags>
					</BlankCard>
				)
			})}
		</>
	)
}

const RandomStr = () => {
	const len = Math.floor(Math.random() * 10) + 3
	const randomString = '01'
	let ans = ''
	for (let i = len; i > 0; i--) {
		ans += randomString[Math.floor(Math.random() * randomString.length)]
	}
	return ans
}

const BlankCard = styled.div`
	display: flex;
	flex-direction: column;
`

const Tag = styled.span`
	width: 100%;
	padding-top: 3px;
	text-align: center;
	font-size: 0.9em;
`