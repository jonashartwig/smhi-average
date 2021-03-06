import { toRadian } from "./radians";

export function getMultiplicator(altitude: number): number {
    return 1 / Math.tan(toRadian(altitude)); 
}

export function getShadowLength(height: number, altitude: number): number {
    return height * getMultiplicator(altitude);
}

export default getShadowLength;