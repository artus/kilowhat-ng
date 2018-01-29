import { KiloWhat, IMeterRepository, Meter, MeterEvent, Dial, Reading } from 'kilowhat';

export class KilowhatStorage
{
    save(kw : KiloWhat)
    {
        console.log(`commencing save`);
        let kiloWhatDO = new Array<MeterDO>();
        
        // Convert all entities to DO
        for (let meter of Array.from(kw.repo.getMeters().values()))
        {
            let meterDODescription = meter.description;
            let dialDOArray = new Array<DialDO>();
            let meterEventDOArray = new Array<MeterEventDO>();
            
            for (let dial of Array.from(meter.dials.values()))
            {
                let dialDODescription = dial.description;
                let readingDOArray = new Array<ReadingDO>();
                
                for (let reading of Array.from(dial.readings.values()))
                {
                    readingDOArray.push(new ReadingDO(reading.id, reading.value, reading.date));
                }
                
                dialDOArray.push(new DialDO(dial.id, dial.description, readingDOArray));
            }
            
            for (let meterEvent of Array.from(meter.meterEvents.values()))
            {
                meterEventDOArray.push(new MeterEventDO(meterEvent.id, meterEvent.description, meterEvent.date));
            }
            
            kiloWhatDO.push(new MeterDO(meter.id, meter.number, meter.description, dialDOArray, meterEventDOArray ));
            console.log(`saved meter ${ meter.id }`);
        }
        
        localStorage.setItem('kilowhat', JSON.stringify(kiloWhatDO));
    }
    
    load() : KiloWhat
    {
        let kiloWhat = new KiloWhat();
        
        if (localStorage.getItem('kilowhat') === null) return new KiloWhat();
        
        let kiloWhatDO = JSON.parse(localStorage.getItem('kilowhat'));
        
        for (let meterDO of kiloWhatDO)
        {
            let newMeter = new Meter();
            newMeter.description = meterDO.description;
            newMeter.number = meterDO.number;
            
            kiloWhat.repo.addMeter(newMeter);
            
            for (let dialDO of meterDO.dials)
            {
                let newDial = new Dial();
                newDial.description = dialDO.description;
                
                kiloWhat.repo.addDial(newMeter.id, newDial);
                
                for (let readingDO of dialDO.readings)
                {
                    let newReading = new Reading();
                    newReading.value = readingDO.value;
                    newReading.date = new Date(readingDO.date);
                    
                    kiloWhat.repo.addReading(newMeter.id, newDial.id, newReading);
                }
            }
            
            for (let meterEventDO of meterDO.meterEvents)
            {
                let newMeterEvent = new MeterEvent();
                newMeterEvent.description = meterEventDO.description;
                newMeterEvent.date = new Date(meterEventDO.date);
                
                kiloWhat.repo.addMeterEvent(newMeter.id, newMeterEvent);
            }
        }
        
        return kiloWhat;
    }
}

export class MeterEventDO
{
    constructor(public id : number, public description : string, public date : Date) { }
}

export class ReadingDO
{
    constructor(public id : number, public value : number, public date : Date) { }
}

export class DialDO
{
    constructor(public id : number, public description : string, public readings : Array<ReadingDO>) { }
}

export class MeterDO
{
    constructor(public id : number, public number : string, public description : string, public dials : Array<DialDO>, public meterEvents : Array<MeterEventDO>) { }
}