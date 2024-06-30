import {Polyline} from "react-leaflet";

const SegmentedPolyline = ({coordinates}) => {
    // Проверяем, есть ли хотя бы две точки для построения градиента
    if (coordinates.length < 2) {
        return null;
    }

    // Делим траекторию на сегменты, каждый из которых будет отрисован своим цветом
    const segments = coordinates.reduce((acc, cur, idx) => {
        if (idx === 0) {
            acc.push({
                from: coordinates[idx],
                to: middleCoordinate(coordinates[idx], coordinates[idx + 1]),
                color: coordinates[idx].color
            })
        } else if (idx === coordinates.length - 1) {
            acc.push({
                from: middleCoordinate(coordinates[idx - 1], coordinates[idx]),
                to: coordinates[idx],
                color: coordinates[idx].color
            })
        } else {
            acc.push({
                from: middleCoordinate(coordinates[idx - 1], coordinates[idx]),
                to: coordinates[idx],
                color: coordinates[idx].color
            })
            acc.push({
                from: coordinates[idx],
                to: middleCoordinate(coordinates[idx], coordinates[idx + 1]),
                color: coordinates[idx].color
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

export default SegmentedPolyline;