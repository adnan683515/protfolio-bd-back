import type { Request, Response } from 'express';
export declare const createDesignController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllDesignsController: (req: Request, res: Response) => Promise<void>;
interface IDesignDetails {
    id: string;
}
export declare const getDesignByIdController: (req: Request<IDesignDetails>, res: Response) => Promise<void>;
export declare const updateDesignController: (req: Request<IDesignDetails>, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=design.controller.d.ts.map