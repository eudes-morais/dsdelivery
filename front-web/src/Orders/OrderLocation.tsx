// Confome HOW-TO do site do leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position = {
    lat: -25.4817855,
    lng: -49.2965682
}

function OrderLocation() {

    return (
        <>
            <div className="order-location-container">
                <div className="order-location-content">
                    <h3 className="order-location-title">Selecione onde o pedido deve ser entregue:</h3>
                    <div className="filter-container">

                    </div>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Minha marcação
                            </Popup>
                        </Marker>
                    </MapContainer>

                </div>
            </div>
        </>
    )
}

export default OrderLocation;