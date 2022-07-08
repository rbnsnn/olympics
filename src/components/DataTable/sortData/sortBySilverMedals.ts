import MedalDataType from '../../../types/MedalDataType'

const sortBySilverMedals = (data: MedalDataType[]): MedalDataType[] => {
    const sorted = data.sort((a: MedalDataType, b: MedalDataType): number => {

        if (a.silverMedals > b.silverMedals) {
            return -1
        }
        if (a.silverMedals < b.silverMedals) {
            return 1
        }
        return 0
    }

    )
    return sorted
}

export default sortBySilverMedals