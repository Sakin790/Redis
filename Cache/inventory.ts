static inventory = asyncHandler(async (req: Request, res: Response) => {
    try {
      // Check if data is in cache
      const cachedData = await client.get(CACHE_KEY);

      if (cachedData) {
        // Parse the cached data and return it
        const result = JSON.parse(cachedData);
        return res.json(new ApiResponse(200, result, "Success (from cache)"));
      }

      const result = await db.select().from(inventoryTable);

      await client.set(CACHE_KEY, JSON.stringify(result), {
        EX: 60,
      });

      return res.json(new ApiResponse(200, result, "Success"));
    } catch (error) {
      return res
        .status(500)
        .json(
          new ApiError(
            500,
            "Something went wrong when trying to load the inventory"
          )
        );
    }
  });