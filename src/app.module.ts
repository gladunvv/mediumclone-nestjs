import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@app/app.controller';
import { TagModule } from '@app/tag/tag.module';
import { AppService } from '@app/app.service';
import ormconfig from '@app/ormconfig';
import { AuthMiddleware } from '@user/middlewares/auth.middleware';
import { UserModule } from '@user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
