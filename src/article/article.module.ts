import { UserEntity } from '@user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from '@article/article.controller';
import { ArticleEntity } from '@article/article.entity';
import { ArticleService } from '@article/article.service';
import { FollowEntity } from '@app/profile/follow.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleEntity, UserEntity, FollowEntity]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
