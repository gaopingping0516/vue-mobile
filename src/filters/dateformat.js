import moment from 'moment'
export default function (value, partern) {
    return moment(value).format(partern);
}