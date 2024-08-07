import {Polyline} from "react-leaflet";
import * as d3 from 'd3';

const AnalyzedTrajectoryPolyline = ({coordinates}) => {
    // Проверяем, есть ли хотя бы две точки для построения градиента
    console.log(coordinates);
    if (coordinates.length < 2) {
        return null;
    }

    function getGreenRedGradient(intensity) {
        if (intensity < 0.5) {
            // Создаем шкалу для зеленого-черного
            const greenBlackScale = d3.scaleLinear()
                .domain([0, 0.5])
                .range(['#2cfa02', '#e5fa02']);

            return greenBlackScale(intensity);
        } else {
            // Создаем шкалу для черного-красного
            const blackRedScale = d3.scaleLinear()
                .domain([0.5, 1])
                .range(['#e5fa02', '#fa023c']);

            return blackRedScale(intensity);
        }
    }

    // Делим траекторию на сегменты, каждый из которых будет отрисован своим цветом
    const segments = coordinates.reduce((acc, cur, idx) => {
        if (idx === 0) {
            acc.push({
                from: coordinates[idx],
                to: middleCoordinate(coordinates[idx], coordinates[idx + 1]),
                color: getGreenRedGradient(coordinates[idx].intensity)
            })
        } else if (idx === coordinates.length - 1) {
            acc.push({
                from: middleCoordinate(coordinates[idx - 1], coordinates[idx]),
                to: coordinates[idx],
                color: getGreenRedGradient(coordinates[idx].intensity)
            })
        } else {
            acc.push({
                from: middleCoordinate(coordinates[idx - 1], coordinates[idx]),
                to: coordinates[idx],
                color: getGreenRedGradient(coordinates[idx].intensity)
            })
            acc.push({
                from: coordinates[idx],
                to: middleCoordinate(coordinates[idx], coordinates[idx + 1]),
                color: getGreenRedGradient(coordinates[idx].intensity)
            })
        }
        return acc;
    }, []);

    function middleCoordinate(coordinate1, coordinate2) {
        const lat1Rad = coordinate1.lat * Math.PI / 180;
        const lon1Rad = coordinate1.lon * Math.PI / 180;
        const lat2Rad = coordinate2.lat * Math.PI / 180;
        const lon2Rad = coordinate2.lon * Math.PI / 180;

        const middleLatRad = (lat1Rad + lat2Rad) / 2;

        let middleLonRad = (lon1Rad + lon2Rad) / 2;
        if (Math.abs(lon2Rad - lon1Rad) > Math.PI) {
            middleLonRad = (lon1Rad + lon2Rad + 2 * Math.PI) / 2;
        }

        const middleLat = middleLatRad * 180 / Math.PI;
        const middleLon = middleLonRad * 180 / Math.PI;

        return {lat: middleLat, lon: middleLon};
    }

    // Отрисовка каждого сегмента
    return (
        <>
            {segments.map((segment, idx) => (
                <Polyline
                    key={idx}
                    positions={[
                        [segment.from.lat, segment.from.lon],
                        [segment.to.lat, segment.to.lon],
                    ]}
                    color={segment.color}
                />
            ))}
        </>
    );
};

export default AnalyzedTrajectoryPolyline;