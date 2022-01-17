export interface IBling {
  insertPipedriveEarningsAsOrder: (
    pipedriveDealsWithEarnings: any[]
  ) => Promise<unknown>;
}
