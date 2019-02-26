import { SerializableClassInterface } from '../serializable/serializable.class.interface';
import { DataJSONInterface } from './data.json.interface';
export interface DataInterface extends SerializableClassInterface {
    setValue(value: number | string): void;
    getValue(): number | string | boolean;
    getDisplayValue(): number | string | boolean;
    getType(): string;
    getUnit(): string;
    getDisplayUnit(): string;
    getDisplayType(): string;
    getUnitSystem(): UnitSystem;
    toJSON(): DataJSONInterface;
}
export declare enum UnitSystem {
    Metric = 0,
    Imperial = 1
}
