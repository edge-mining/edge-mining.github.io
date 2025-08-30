# Glossary

Following the **Ubiquitous Language** approach of Domain-Driven Design (DDD), this glossary is organized by subdomains and contains simplified definitions gathered from domain experts. Its purpose is to establish a clear and consistent vocabulary, essential for effective communication and development of the application.

Subdomains:
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
**Automation Rule**: Rules that automate the process of turning on, controlling, or turning off a miner. For example, turn off the miner if the battery has dropped below 80%.

**Optimization Policy**: Collection of automation rules that define energy optimization policies aimed at achieving a goal. For example:
- *Preserve Battery*: a collection of rules designed to provide power to the miner only if the battery is full without ever discharging it.
- *Stop Export*: a collection of rules aimed at reduce or totally stopping the energy exported to the Grid Operator.

## Energy System Monitoring
**Inverter**: A machine that produces energy using solar panels. It may have one or multiple MPPTs and can be either on-grid or off-grid.

**Solar panel**: A hardware component that produces energy from sunlight.

**Battery**: A hardware component that stores energy.

**Battery SoC**: *State of Charge* of the battery; it represents the total amount of energy stored in the battery.

**Battery Discharge**: The process by which energy exits the battery.

**Battery Charge**: The process by which energy enters the battery.

**Unused Energy**:
- In On-Grid systems, this is the energy not used by the loads and fed into the national electric grid.
- In Off-Grid systems, this is the energy not produced by the system because it is not required by the loads/batteries.

**Loads**: Devices that consume energy.

## Mining Device Management
**Miner**: A machine that uses electrical energy to solve mathematical calculations and produce heat.

**Hashboard**: The part of the miner that contains the chips responsible for calculating hashes.

**Control board**: The main controller in a miner that manages communication, power distribution, and operational logic.

**Fan**: A cooling component that regulates the miner's internal temperature by moving air across heated parts.

**Smart plug**: A remotely controllable power outlet that can be used to power on/off a miner automatically or based on conditions.

**Hashrate**: A measurement of the computing power of a miner.

**Energy consumption**: The electrical energy used by the miner.

**Core temperature**: The temperature of the main chips.

**Efficiency**: The power consumption in relation to the produced hashrate. Can be measured in W/TH or J/TH.

**Mining pool**: A group of miners who combine their computational resources to increase the probability of mining a block and share the reward proportionally.

**Stock Firmware**: The original firmware pre-installed by the miner's manufacturer. It governs low-level operations such as startup sequences, thermal management, fan control, hashrate adjustment, and network communication. Typically more stable but less customizable than third-party firmware.

**Third-Party Firmware**: Custom firmware developed by independent developers or communities that replaces the stock firmware on a miner. It often provides enhanced functionality, greater configurability, performance tuning options, and additional features such as API access, advanced monitoring, or custom fan curves. It may, however, require more technical knowledge and can void warranties.

## Home Consumption Analytics

*to complete...*

## Energy Forecast

*to complete...*

## Heat Utilization

*to be complete...*

## Mining Performance Analysis

*to be complete...*

## User Settings

*to be complete...*

## Notification System

*to be complete...*

