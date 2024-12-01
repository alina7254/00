package hk.burunduchan.model

import jakarta.persistence.*
import java.io.File
import java.time.LocalDateTime

@Entity
@Table(name = "posts")
data class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,

    @Column(name = "content")
    val content: String? = null,

    @Column(name = "author", nullable = false)
    val author: String,

    @Column(name = "timestamp", nullable = false)
    val timestamp: LocalDateTime = LocalDateTime.now(),

    @Column(name = "op", nullable = false)
    val op: Boolean = false,

    @Column(name = "post_number", nullable = false)
    val postNumber: Int,

    @Column(name = "title")
    val title: String? = null,

    @Column(name = "blob")
    val blob: String? = null,

    @ManyToOne
    @JoinColumn(name = "board_id", referencedColumnName = "id")
    val board: Board,

    @ManyToOne
    @JoinColumn(name = "reply_to")
    val replyTo: Post
)

