import MedalDataType from '../../../types/MedalDataType'

const sortByTotalMedals = (data: MedalDataType[]): MedalDataType[] => {
    const sorted = data.sort((a: MedalDataType, b: MedalDataType): number => {

        if (a.totalMedals > b.totalMedals) {
            return -1
        }
        if (a.totalMedals < b.totalMedals) {
            return 1
        }
        return 0
    }

    )
    return sorted
}

export default sortByTotalMedals