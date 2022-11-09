import React from 'react';
import sqlVsNosql from '../../assets/blog/sql-vs-nosql.jpg';



const BlogSql = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='w-11/12 lg:w-2/3 mx-auto text-gray-600'>
        <h2 className='text-3xl mb-5 font-semibold'>Difference between SQL and NoSQL</h2>
        <img src={sqlVsNosql} alt="" />
        <p className="mt-4 leading-relaxed text-gray-700">
          <p className="mt-4 leading-relaxed text-gray-700">
            There are five practical differences between SQL and NoSQL:
          </p>
          <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
            1. Language
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
          </p>
          <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
            2. Scalability
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:
          </p>
          <ul className='list-disc m-3'>
            <li>SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.</li>
            <li>NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.</li>
            <li>Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.</li>
          </ul>
        </p>
        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          3. Structure
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          NoSQL databases need not stick to this format, but generally fit into one of four broad categories:
        </p>
        <ul className='list-disc m-3'>
          <li><span className='font-semibold'>Column-oriented</span> databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.</li>
          <li><span className='font-semibold'>Key-Value</span> stores are dictionaries which access diverse objects with a key unique to each.</li>
          <li><span className='font-semibold'>Document</span> stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.</li>
          <li><span className='font-semibold'>Graph</span> databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.</li>
        </ul>
        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          4. Properties
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:
        </p>
        <ul className='list-disc m-3'>
          <li><span className='font-semibold'>Atomicity </span> means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.</li>
          <li><span className='font-semibold'>Consistency </span> means that at each step the database follows invariants: rules which validate and prevent corruption.</li>
          <li><span className='font-semibold'>Isolation </span> prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.</li>
          <li><span className='font-semibold'>Durability </span> makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-gray-700">
          NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:
        </p>
        <ul className='list-disc m-3'>
          <li><span className='font-semibold'>Consistency </span> Every request receives the most recent result, or an error. (Note this is different than in ACID)</li>
          <li><span className='font-semibold'>Availability </span> Every request has a non-error result, regardless of how recent that result is.</li>
          <li><span className='font-semibold'>Partition tolerance </span> Any delays or losses between nodes will not interrupt the system’s operation.</li>
        </ul>
        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          5. Support and communities
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.
        </p>

      </div>
    </div>
  );
};

export default BlogSql;