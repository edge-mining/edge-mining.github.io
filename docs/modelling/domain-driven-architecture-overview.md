
# Domain-Driven Architecture Overview

The central problem the application solves is the *optimization of energy usage* using excess energy production (especially from renewables) by integrating Bitcoin mining. This isn't just about mining; it's about using mining as *a tool* for energy management. The core domain revolves around the intelligent automation and control of mining based on energy availability and goals.

# Domains Brake Down

This outlines a strategic categorization of subdomains according to their importance within the system. Furthermore, it details the internal composition of each subdomain, breaking it down into entities, value objects, and aggregates to clarify responsibilities and structure.

- 🟢​ **Core:** The *automation/decision logic* is central. This is where the unique value proposition lies.
- 🟣 **Supporting:** These domains are necessary for the core domain to function but aren't the primary differentiator.
- ⚫ **Generic:** These are common problems solved elsewhere, not specific to this domain.

The identified domains are:
- 🟢 [Energy Optimization & Mining Automation](#energy-optimization--mining-automation)
- 🟣 [Energy System Monitoring](#energy-system-monitoring)
- 🟣 [Mining Device Management](#mining-device-management)
- 🟣 [Home Consumption Analytics](#home-consumption-analytics)
- 🟣 [Energy Forecast](#energy-forecast)
- 🟣 [Heat Utilization](#heat-utilization)
- 🟣 [Mining Performance Analysis](#mining-performance-analysis)
- ⚫ [User Settings](#user-settings)
- ⚫ [Notification System](#notification-system)

## Energy Optimization & Mining Automation
This is the **Core** domain that captures the intelligence, making smart decisions about *when* to mine based on energy conditions.

**Components**:
  - `OptimizationPolicy` (Entity? Aggregate Root?): A collection of rules and goals driving the automation decisions. It makes decisions based on input (e.g. "*stabilizes hashrate*", "*battery health*" or "*heats the room*").
  - `AutomationRule` (Entity? Maybe Value Object within a Policy?): Represents a user-defined or system rule (e.g., "*turn on if battery > 80% AND forecast > X*"). The *logic* itself.
  - `MiningDecision` (Value Object): The output of the policy (e.g., `StartMining`, `StopMining`, `MaintainState`, `ChangeState`).

## Energy System Monitoring
This is a **Supporting** domain, focuses on data acquisition from the energy plant (production, storage, consumption) and to provide them to the core domain. It doesn't *decide* anything, just reports.

**Components**:
  - `EnergyPlant` (Entity or Aggregate Root): Represents the overall energy production system.
  - `EnergySource` (Entity): e.g., Solar Panel Array, Wind Turbine. Has properties like `CurrentProduction` (VO).
  - `EnergyStorage` (Entity): e.g., Battery. Has properties like `StateOfCharge` (VO), `NominalCapacity` (VO), `ActualCapacity` (VO).
  - `EnergyLoad` (Entity): Represents the user's main energy load. Contains `CurrentConsumption` (VO)
  - `EnergyReading` (Value Object): A specific measurement (e.g., 5 kW production at timestamp T).
  - `EnergyStateSnapshot` (Value Object): Represents the state of the energy system at a point in time (*production*, *consumption*, *battery level*, *forecast*). Used as input for decisions.

## Mining Device Management
This is a **Supporting** domain, focuses on controlling and possibly monitoring the state of the ASIC miners. Needs to execute the commands from the core domain (turn on/off) and maybe report miner status. It doesn't *decide* when to turn on/off.

**Components**:
  - `Miner` (ASIC) (Entity): Represents a physical mining device. Has a `MinerId` (VO), `Status` (VO: *On, Off, Error*), maybe `PowerConsumption` (VO).
  - `MiningFarm` (Entity? Aggregate Root? Optional): If managing multiple miners as a group.
  - `ControlCommand` (Value Object): e.g., `TurnOn`, `TurnOff`, `SetHashboard`.

## Energy Forecast
This is a ***Supporting** domain, focuses on data collection from forecast external services and to provide them to the core domain.

**Components**:
  - `ForecastData` (Value Object): Represents the relevant solar/energy forecast.

## Home Consumption Analytics
This is a **Supporting** domain, focuses on home energy loads forcasts. Needs to provide data (estimate consumptions, times) of the home energy loads (Washing machine, Dishwasher, Boiler, EV Charger) to the core domain. It can be a **core subdomain** (thanks to [this post](https://vladikk.com/2018/01/26/revisiting-the-basics-of-ddd/)), but let's keep it as supporting for now.

**Components**:
  - `HomeLoadsProfile` (Aggregate Root): Represents the typical energy load profile of a household.
  - `LoadDevice` (Entity): Represents a specific energy load inside the home. Includes `ConsumptionForecast`.

## Heat Utilization
This is a **Supporting** domain, could become more core if heat *demand* starts driving mining decisions, but based on the actual needs, it's primarily about *using* the byproduct.

**Components**:
  - (Potentially) `HeatOutput` (Value Object?): Associated with a Miner's operation.
  - (Potentially) `HeatingZone` (Entity?): If actively managing heat distribution.
  - (Potentially) `TemperatureSensor` (Entity?): To monitor effectiveness.

## Mining Performance Analysis
This is a **Supporting** domain, focuses on reporting earnings, hash rates, etc. Important for the user, but the core *automation* doesn't strictly depend on real-time profitability calculations (though it could influence user *goals*).

**Components**:
  - `MiningSession` (Entity?): Represents a period when a miner was active.
  - `MiningReward` (Value Object): Satoshi earned.
  - `HashRate` (Value Object): Mining speed.
  - `PoolConnectionDetails` (Value Object/Entity?): Details about the mining pool being used.

## User Settings
This is a **Generic** domain. Handles user settings, goals, and UI presentation. Let's treat it as Supporting as it presents data from other domains and takes user input that influences the Core domain.

**Components**:
  - `User` (Entity): The system user.
  - `SystemSettings` (Entity/VO): Global or specific settings.
  - `NotificationPreference` (VO): Notification settings.

## Notification System
This is a **Generic** domain. Informing users about events.

# Context Mapping: Subdomain Interactions

Shows how different subdomains interact by exchanging information and triggering actions. This helps define the flow of responsibilities in the system.

| From (Subdomain)                    | ➡️ | To (Subdomain)                          | Data/Action Provided                              |
| ----------------------------------- | --- | --------------------------------------- | ------------------------------------------------- |
| Energy System Monitoring            | ➡️ | Energy Optimization & Mining Automation | `EnergyStateSnapshot`                             |
| External Integrations (Forecast)    | ➡️ | Energy Optimization & Mining Automation | `ForecastData`                                    |
| User Configuration & Interaction    | ➡️ | Energy Optimization & Mining Automation | User parameters for `OptimizationPolicy`          |
| Energy Optimization & Mining Auto.  | ➡️ | Mining Device Management                | `ControlCommand` (e.g., TurnOn Miner X)           |
| Mining Device Management            | ➡️ | Energy Optimization & Mining Automation | Miner status reports                              |
| Mining Device Management            | ➡️ | Mining Performance Analysis             | Uptime, possibly hashrate                         |
| External Integrations (Mining Pool) | ➡️ | Mining Performance Analysis             | `MiningReward` data                               |
| Home Consumption Analytics          | ➡️ | Energy Optimization & Mining Automation | Aggregate `ConsumptionForecast`                   |
| Monitoring Subdomains               | ➡️ | User Configuration & Interaction        | Data for display (status, performance, heat, ...) |
