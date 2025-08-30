<template><div><h1 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary"><span>Glossary</span></a></h1>
<p>This glossary defines key terms and concepts used throughout the Edge Mining documentation and codebase.</p>
<h2 id="a" tabindex="-1"><a class="header-anchor" href="#a"><span>A</span></a></h2>
<h3 id="aggregate" tabindex="-1"><a class="header-anchor" href="#aggregate"><span>Aggregate</span></a></h3>
<p>A cluster of domain objects that can be treated as a single unit for data changes. Aggregates have a root entity that maintains consistency boundaries.</p>
<h3 id="anti-corruption-layer" tabindex="-1"><a class="header-anchor" href="#anti-corruption-layer"><span>Anti-Corruption Layer</span></a></h3>
<p>A design pattern that isolates a system from external dependencies by translating between different data models and protocols.</p>
<h3 id="api-application-programming-interface" tabindex="-1"><a class="header-anchor" href="#api-application-programming-interface"><span>API (Application Programming Interface)</span></a></h3>
<p>A set of rules and protocols that allows different software applications to communicate with each other.</p>
<h2 id="b" tabindex="-1"><a class="header-anchor" href="#b"><span>B</span></a></h2>
<h3 id="block" tabindex="-1"><a class="header-anchor" href="#block"><span>Block</span></a></h3>
<p>A collection of transactions in a blockchain that has been cryptographically linked to the previous block.</p>
<h3 id="block-reward" tabindex="-1"><a class="header-anchor" href="#block-reward"><span>Block Reward</span></a></h3>
<p>The cryptocurrency reward given to miners for successfully mining a new block in the blockchain.</p>
<h3 id="bounded-context" tabindex="-1"><a class="header-anchor" href="#bounded-context"><span>Bounded Context</span></a></h3>
<p>A boundary within which a particular domain model is defined and applicable. It helps manage complexity by clearly defining what belongs to the domain and what doesn't.</p>
<h2 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C</span></a></h2>
<h3 id="command" tabindex="-1"><a class="header-anchor" href="#command"><span>Command</span></a></h3>
<p>An object that represents an intention to change the state of the system. Commands are processed by command handlers.</p>
<h3 id="cqrs-command-query-responsibility-segregation" tabindex="-1"><a class="header-anchor" href="#cqrs-command-query-responsibility-segregation"><span>CQRS (Command Query Responsibility Segregation)</span></a></h3>
<p>A pattern that separates read and write operations for a data store, allowing them to be optimized independently.</p>
<h3 id="cryptocurrency" tabindex="-1"><a class="header-anchor" href="#cryptocurrency"><span>Cryptocurrency</span></a></h3>
<p>A digital or virtual currency that uses cryptography for security and operates on a decentralized network.</p>
<h2 id="d" tabindex="-1"><a class="header-anchor" href="#d"><span>D</span></a></h2>
<h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain"><span>Domain</span></a></h3>
<p>A sphere of knowledge, influence, or activity. In Domain-Driven Design, a domain represents a specific area of business functionality.</p>
<h3 id="domain-event" tabindex="-1"><a class="header-anchor" href="#domain-event"><span>Domain Event</span></a></h3>
<p>A significant occurrence that happened within the domain. Domain events are used to communicate changes between different parts of the system.</p>
<h3 id="domain-model" tabindex="-1"><a class="header-anchor" href="#domain-model"><span>Domain Model</span></a></h3>
<p>A conceptual model of the domain that incorporates both behavior and data. It represents the core business logic and rules.</p>
<h3 id="domain-service" tabindex="-1"><a class="header-anchor" href="#domain-service"><span>Domain Service</span></a></h3>
<p>A service that implements domain logic that doesn't naturally belong to any entity or value object.</p>
<h2 id="e" tabindex="-1"><a class="header-anchor" href="#e"><span>E</span></a></h2>
<h3 id="edge-device" tabindex="-1"><a class="header-anchor" href="#edge-device"><span>Edge Device</span></a></h3>
<p>A computing device that performs data processing at the edge of a network, closer to the data source, rather than in a centralized location.</p>
<h3 id="entity" tabindex="-1"><a class="header-anchor" href="#entity"><span>Entity</span></a></h3>
<p>An object that has a unique identity and a lifecycle that can change over time. Entities are defined by their identity rather than their attributes.</p>
<h3 id="event-sourcing" tabindex="-1"><a class="header-anchor" href="#event-sourcing"><span>Event Sourcing</span></a></h3>
<p>A pattern where all changes to application state are stored as a sequence of events. The current state can be reconstructed by replaying these events.</p>
<h2 id="f" tabindex="-1"><a class="header-anchor" href="#f"><span>F</span></a></h2>
<h3 id="fork" tabindex="-1"><a class="header-anchor" href="#fork"><span>Fork</span></a></h3>
<p>A situation where a blockchain splits into two separate chains, usually due to a disagreement in the network about which version of the blockchain to follow.</p>
<h2 id="h" tabindex="-1"><a class="header-anchor" href="#h"><span>H</span></a></h2>
<h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash"><span>Hash</span></a></h3>
<p>A mathematical function that converts input data of any size into a fixed-size string of characters. In cryptocurrency mining, hashes are used to secure the blockchain.</p>
<h3 id="hash-rate" tabindex="-1"><a class="header-anchor" href="#hash-rate"><span>Hash Rate</span></a></h3>
<p>The speed at which a computer or network can perform hash operations. It's a measure of mining power and is typically expressed in hashes per second (H/s).</p>
<h2 id="m" tabindex="-1"><a class="header-anchor" href="#m"><span>M</span></a></h2>
<h3 id="mining" tabindex="-1"><a class="header-anchor" href="#mining"><span>Mining</span></a></h3>
<p>The process of validating and adding new transactions to a blockchain by solving complex mathematical puzzles.</p>
<h3 id="mining-pool" tabindex="-1"><a class="header-anchor" href="#mining-pool"><span>Mining Pool</span></a></h3>
<p>A group of miners who combine their computational resources to increase their chances of successfully mining blocks and earning rewards.</p>
<h3 id="mining-task" tabindex="-1"><a class="header-anchor" href="#mining-task"><span>Mining Task</span></a></h3>
<p>A specific computational task assigned to miners, typically involving finding a hash that meets certain criteria.</p>
<h2 id="n" tabindex="-1"><a class="header-anchor" href="#n"><span>N</span></a></h2>
<h3 id="node" tabindex="-1"><a class="header-anchor" href="#node"><span>Node</span></a></h3>
<p>A computer or device that participates in a blockchain network by maintaining a copy of the blockchain and validating transactions.</p>
<h3 id="nonce" tabindex="-1"><a class="header-anchor" href="#nonce"><span>Nonce</span></a></h3>
<p>A number used once in cryptographic communications. In mining, it's a value that miners change to try to find a valid hash.</p>
<h2 id="p" tabindex="-1"><a class="header-anchor" href="#p"><span>P</span></a></h2>
<h3 id="peer" tabindex="-1"><a class="header-anchor" href="#peer"><span>Peer</span></a></h3>
<p>Another node in the network with which a node can communicate directly.</p>
<h3 id="proof-of-work-pow" tabindex="-1"><a class="header-anchor" href="#proof-of-work-pow"><span>Proof of Work (PoW)</span></a></h3>
<p>A consensus mechanism that requires participants to perform computational work to validate transactions and create new blocks.</p>
<h2 id="q" tabindex="-1"><a class="header-anchor" href="#q"><span>Q</span></a></h2>
<h3 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>Query</span></a></h3>
<p>An object that represents a request for data from the system. Queries are processed by query handlers and do not change system state.</p>
<h2 id="r" tabindex="-1"><a class="header-anchor" href="#r"><span>R</span></a></h2>
<h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository"><span>Repository</span></a></h3>
<p>An abstraction that encapsulates the logic required to access data sources. Repositories provide a collection-like interface for accessing domain objects.</p>
<h3 id="reward" tabindex="-1"><a class="header-anchor" href="#reward"><span>Reward</span></a></h3>
<p>The cryptocurrency payment given to miners for successfully mining a block or contributing to the network.</p>
<h2 id="s" tabindex="-1"><a class="header-anchor" href="#s"><span>S</span></a></h2>
<h3 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>Service</span></a></h3>
<p>A stateless object that implements domain logic that doesn't belong to any entity or value object.</p>
<h3 id="shared-kernel" tabindex="-1"><a class="header-anchor" href="#shared-kernel"><span>Shared Kernel</span></a></h3>
<p>A design pattern where multiple bounded contexts share a common subset of the domain model, including code, database schema, and language.</p>
<h3 id="smart-contract" tabindex="-1"><a class="header-anchor" href="#smart-contract"><span>Smart Contract</span></a></h3>
<p>A self-executing contract with the terms of the agreement directly written into code. Smart contracts run on blockchain platforms.</p>
<h2 id="t" tabindex="-1"><a class="header-anchor" href="#t"><span>T</span></a></h2>
<h3 id="transaction" tabindex="-1"><a class="header-anchor" href="#transaction"><span>Transaction</span></a></h3>
<p>A record of a cryptocurrency transfer from one address to another. Transactions are grouped together in blocks.</p>
<h3 id="transaction-fee" tabindex="-1"><a class="header-anchor" href="#transaction-fee"><span>Transaction Fee</span></a></h3>
<p>A small amount of cryptocurrency paid to miners for processing and validating a transaction.</p>
<h2 id="u" tabindex="-1"><a class="header-anchor" href="#u"><span>U</span></a></h2>
<h3 id="user-story" tabindex="-1"><a class="header-anchor" href="#user-story"><span>User Story</span></a></h3>
<p>A description of a feature from the perspective of the end user. User stories help guide development by focusing on user value.</p>
<h2 id="v" tabindex="-1"><a class="header-anchor" href="#v"><span>V</span></a></h2>
<h3 id="value-object" tabindex="-1"><a class="header-anchor" href="#value-object"><span>Value Object</span></a></h3>
<p>An object that represents a descriptive aspect of the domain with no conceptual identity. Value objects are defined by their attributes rather than their identity.</p>
<h2 id="w" tabindex="-1"><a class="header-anchor" href="#w"><span>W</span></a></h2>
<h3 id="wallet" tabindex="-1"><a class="header-anchor" href="#wallet"><span>Wallet</span></a></h3>
<p>A digital tool that allows users to store, send, and receive cryptocurrency. Wallets contain private keys that are used to sign transactions.</p>
<h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket"><span>WebSocket</span></a></h3>
<p>A communication protocol that provides full-duplex communication channels over a single TCP connection, enabling real-time data exchange.</p>
<h2 id="z" tabindex="-1"><a class="header-anchor" href="#z"><span>Z</span></a></h2>
<h3 id="zero-knowledge-proof" tabindex="-1"><a class="header-anchor" href="#zero-knowledge-proof"><span>Zero-Knowledge Proof</span></a></h3>
<p>A cryptographic method that allows one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself.</p>
<hr>
<p>This glossary is a living document that will be updated as the Edge Mining platform evolves. If you encounter terms that are not defined here, please contribute to the documentation by adding them.</p>
</div></template>


