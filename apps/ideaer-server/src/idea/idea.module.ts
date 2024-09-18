import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IdeaModuleBase } from "./base/idea.module.base";
import { IdeaService } from "./idea.service";
import { IdeaController } from "./idea.controller";
import { IdeaResolver } from "./idea.resolver";

@Module({
  imports: [IdeaModuleBase, forwardRef(() => AuthModule)],
  controllers: [IdeaController],
  providers: [IdeaService, IdeaResolver],
  exports: [IdeaService],
})
export class IdeaModule {}
