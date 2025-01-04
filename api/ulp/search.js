import { getDatabase } from '../../config/database.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { type, query } = req.query

  if (!type || !query) {
    return res.status(400).json({ error: 'Missing required parameters' })
  }

  try {
    const db = await getDatabase()
    const collection = db.collection('ulp_data')

    // Build query based on search type
    const dbQuery = { [type]: { $regex: query, $options: 'i' } }
    
    // Limit results and sort by date
    const results = await collection
      .find(dbQuery)
      .sort({ date: -1 })
      .limit(50)
      .toArray()

    res.status(200).json(results)
  } catch (error) {
    console.error('Search failed:', error)
    res.status(500).json({ error: 'Search failed' })
  }
}
